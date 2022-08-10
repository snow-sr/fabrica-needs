import axios from "axios";

export default class Needs {
  async fetchPendingNeeds() {
    try {
      const { data } = await axios.get("http://localhost:8087/needs");
      return Promise.resolve(data);
    } catch (e) {
      return Promise.reject("Erro ao buscar os needs");
    }
  }
}
