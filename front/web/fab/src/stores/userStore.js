import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "profile",
  state: () => ({
    User: {
      name: String,
      email: String,
      createdAt: Date,
      updateAt: Date,
      balance: Number,
    },
  }),
  actions: {
    insertData(userToBeFilled) {
      this.User = {
        name: userToBeFilled.name,
        email: userToBeFilled.email,
        createdAt: userToBeFilled.createdAt,
        updatedAt: userToBeFilled.updateAt,
        balance: userToBeFilled.balance,
      };
    },
  },
});
