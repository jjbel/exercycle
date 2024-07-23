date = () => dayjs().format("D MMMM");
time = () => dayjs().format("h:mm:ss");

const date_element = document.getElementById("date");
const time_element = document.getElementById("time");

setInterval(() => {
  date_element.innerText = date();
  time_element.innerText = time();
}, 1000);

data = new Data();
// setInterval(data.update, 1000);
data.update()
