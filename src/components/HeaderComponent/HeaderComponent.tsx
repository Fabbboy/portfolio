const HeaderComponent = () => {
  const date = new Date().toString().split(" ");
  const time = date[1] + " " + date[2] + " " + date[4].substring(0, 5);

  return (
    <div className="bg-black bg-opacity-50 w-full h-10">
      <div className="flex items-center h-full w-full justify-between p-2">
        <div className="w-20 h-full bg-white rounded-[40px]"></div>
        <p className="text-white">{time}</p>
        <div className="w-20 h-ful"></div>
      </div>
    </div>
  );
};


export default HeaderComponent;