export function MedicalRecordTHead() {
  return (
    <div className="flex flex-row my-2 p-2 bg-gray-200 rounded-t-md *:text-sm *:text-gray-500 *:font-sans *:font-semibold sm:*:w-1/6 border-b border-gray-300">
      <h5 className="w-1/3 flex items-center cursor-pointer">名前</h5>
      <h5 className="w-1/3 flex items-center cursor-pointer">受傷箇所</h5>
      <h5 className="w-1/2 flex items-center cursor-pointer">診断</h5>
      <h5 className="w-1/2 flex items-center sm:ml-20 cursor-pointer">
        受傷日
      </h5>
      <h5 className="hidden sm:flex items-center cursor-pointer">復帰日</h5>
    </div>
  );
}
