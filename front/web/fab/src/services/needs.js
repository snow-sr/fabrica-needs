import axios from "axios";

export default class NeedsServices {
  async fetchPendingNeeds() {
    try {
      const { data } = await axios.get("http://localhost:8087/needs");
      return Promise.resolve(data);
    } catch (e) {
      return Promise.reject("Erro ao buscar os needs");
    }
  }
  async createdNeed(need) {
    try {
      const { data } = await axios.post(
        "http://localhost:8087/createNeed",
        need
      );
      return Promise.resolve(data);
    } catch (e) {
      return Promise.reject("Erro ao criar o need");
    }
  }
  async solveNeed(needIdAndUser) {
    try {
      const { data } = await axios.post(
        "http://localhost:8087/solveNeed",
        needIdAndUser
      );
      return Promise.resolve(data);
    } catch (e) {
      return Promise.reject("Erro ao resolver o need");
    }
  }
}
