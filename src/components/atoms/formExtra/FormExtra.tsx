export default function FormExtra() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-[#2C2C2B] border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-[#2C2C2B]"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a href="#" className="font-medium text-[#2C2C2B] hover:blur-[0.35px]">
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
