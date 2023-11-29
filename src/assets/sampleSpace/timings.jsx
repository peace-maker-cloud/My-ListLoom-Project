const Content = (naming) => {
  // Declaration
  let greet;
  const data = new Date();
  const timestamp = data.getTime();
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // code space
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  if (amOrPm === "PM" && hours < 12) {
    hours += 12;
    if (hours >= 12 && hours < 17) {
      greet = `Good Afternoon, ${naming.name}`;
    } else if (hours >= 17 && hours < 20) {
      greet = `Good Evening, ${naming.name}`;
    } else if (hours >= 20 && hours < 23) {
      greet = `Good Night, ${naming.name}`;
    } else {
      greet = `Hi, ${naming.name}`;
    }
  } else {
    console.log("after if", hours);
    if (hours >= 12 && hours < 17) {
      greet = `Good Afternoon, ${naming.name}`;
    } else if (hours >= 17 && hours < 20) {
      greet = `Good Evening, ${naming.name}`;
    } else if (hours >= 20 && hours < 23) {
      greet = `Good Night, ${naming.name}`;
    } else {
      greet = `Good Morning, ${naming.name}`;
    }
  }
  //changing 24 to 12
  hours = hours % 12 || 12;
  let hrFormat = hours.toString().padStart(2, "0");
  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `${hrFormat}:${minutes}:${seconds} ${amOrPm}`;
  return (
    <div className=" m-2 bg-orange-500 p-2 rounded-md">
      <div>
        <p className="text-4xl text-center font-bold">{greet}</p>
      </div>
      <div className="m-3">
        <div>
          <p className="text-4xl text-center">Date: {formattedDate}</p>
        </div>
        <div className="m-1">
          <p className="text-4xl text-center">Time: {formattedTime}</p>
        </div>
      </div>
    </div>
  );
};

Content.defaultProps = {
  name: "sorry for this error, name is not showing, pls check the code ASAP",
};
export default Content;
