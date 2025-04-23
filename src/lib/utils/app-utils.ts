import { read, utils } from "xlsx";
// import { guestCollection } from "../../../firebaseConfig";



interface Guest {
  fullname: string;
  seatsCount: number;
  mobileNumber: string;
  invitedBy?: string;
}

const publishedUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBYsQfFi6lAfKQxWFLYgpQCOpucRdj9DKjV-bgmYOzy8X4D9sM-Gjr5PiCHQ9msg/pubhtml?gid=813508633&single=true";

export const xlsToJson = async () => {
  const doc = await (await fetch(publishedUrl)).arrayBuffer();
  const wb = read(doc);
  const data = utils.sheet_to_json<Guest>(wb.Sheets[wb.SheetNames[0]]);
  // await writeToStore(data);
  // console.log("data: ", data);
  return data;
};

export const writeToStore = async (data: Guest[] | any[]) => {
  data.map((guestItem) => {
    // guestCollection.doc().set(guestItem);
  });
};

export const addNewRecord = (guestItem: Guest) => {
  // guestCollection.doc().set(guestItem);
};

export const exportTableDataToExcel = () => {

}

// export const getIdFromJwtToken = (): number | null => {
//   const token = LocalStorageService.getItem(STORE_KEYS_ENUMS.REST_TOKEN)
//   if (token) {
//     const decoded: { id: number, exp: number, iat: number } = jwt_decode(token!);
//     console.log('decoded: ', decoded);
//     return decoded?.id;
//   }
//   return null;
// }
