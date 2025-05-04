import { writeToStore } from "@/lib/utils/app-utils";
import { Guest } from "@/types/all";
import { FileUpIcon, TrashIcon } from "lucide-react";
import { FC, useState } from "react";
import { read, utils } from "xlsx";

const ExcelUpload: FC<{ sheetData: any[], setSheetData: React.Dispatch<any[]>, setRefresh: React.Dispatch<boolean> }> = ({ setSheetData, setRefresh }) => {
    const [file, setFile] = useState(null);
    const [selected, setSelected] = useState(false);

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setSelected(true);
        setRefresh(true)
    };

    const handleFileUpload = () => {
        const fileReader = new FileReader();
        fileReader.onload = (e: ProgressEvent<FileReader> | any) => {
            const data = new Uint8Array(e.target.result as ArrayBuffer);
            const workbook = read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = utils.sheet_to_json<Guest>(sheet);
            setSheetData(jsonData);
            writeToStore(jsonData);
            setTimeout(() => {
                setRefresh(true);
                setFile(null);
                setSelected(false);
            }, 200);
            setRefresh(false);
        };
        fileReader.readAsArrayBuffer(file as unknown as Blob);
    };

    const handleClearFile = () => {
        setFile(null);
        setSelected(false);
        setRefresh(true);
    }

    return (
        <div className='flex flex-row text-center gap-1 items-center cursor-pointer'>
            <div>{'Upload excel sheet'}</div>
            {!!selected && <button onClick={handleFileUpload} disabled={!file} className='flex flex-row items-center disabled:text-gray-400 px-2 text-blue-600'>
                <FileUpIcon height={18} width={18} />
                {'Upload Now'}
            </button>}
            {!!selected && <button onClick={handleClearFile} disabled={!file} className='flex flex-row items-center disabled:text-gray-400 px-2 text-red-400'>
                <TrashIcon height={18} width={18} />
                {'Clear'}
            </button>}

            <input type="file" accept=".xlsx" onChange={handleFileChange} placeholder='test' className='hidden' id="file-input" />
            <label id="file-input-label" htmlFor="file-input" className='flex flex-row items-center disabled:text-gray-400 px-2 cursor-pointer'>
                {!selected && <FileUpIcon height={18} width={18} />}
            </label>
        </div >
    );
}


export default ExcelUpload;