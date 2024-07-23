class Data {
  static date = dayjs().format("YYYY-MM-DD");
  static url = "/data";

  data = {};

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

  async update() {
    await this.getData();
    document.getElementById("count-data").innerText = this.data["count"];
    document.getElementById("speed-data").innerText = this.data["speed"];
  }
}
