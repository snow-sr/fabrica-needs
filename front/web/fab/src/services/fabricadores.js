import axios from "axios";

export default class Fabricadores {
  async fetchFabricadores() {
    try {
      const { data } = await axios.get("http://localhost:8087/Fabricadores");
      console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      return Promise.reject("Erro ao buscar os needs");
    }
  }
}
