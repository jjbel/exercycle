class Data {
  static date = dayjs().format("YYYY-MM-DD");
  static url = "/data";

  data = {};
  init = false;

  async getData() {
    try {
      const response = await fetch(Data.url);
      if (!response.ok) {
        throw new Error(`Error, status: ${response.status}`);
      }

      this.data = await response.json();
      //   console.log(this.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async update_history() {
    console.log("Updating history");

    const day = (date) => {
      //   TODO do with dayjs?? weekday plugin?
      //   TODO but if days aren't last 7 then days will repeat
      const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      return DAYS[dayjs(date, "YYYY-MM-DD").day()];
    };

    const li = (date, count) => {
      return `<tr><td>${day(date)}</td> <td>:</td>  <td>${count}</td></tr>\n`;
    };

    const dates = Object.keys(this.data.history).toSorted().slice(0, 7);

    let str = "";
    for (const date of dates) {
      str += li(date, this.data.history[date]);
      console.log(date);
    }
    console.log(str);

    document.getElementById("history-data").innerHTML = str;
  }

  async update() {
    await this.getData();

    if (!this.init) {
      await this.update_history();
      this.init = true;
    }

    document.getElementById("count-data").innerText = this.data["count"];
    document.getElementById("speed-data").innerText = this.data["speed"];
  }
}
