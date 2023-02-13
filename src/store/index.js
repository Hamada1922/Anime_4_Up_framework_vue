import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cur: 0,
      slidetext: [
        { name: "one Piece", ep: "2" },
        { name: "Classroom Elite", ep: "4" },
        { name: "Over Lord", ep: "6" },
      ],
      searchText: "",
      orderChar: "",
      orderClass: "",
      orderStatus: "",
      orderType: "",
      orderSeason: "",
      // users
      users: [],
      currentUser: null,
      username: "",
      email: "",
      mix: "",
      password: "",
      // messages
      messages: [],
      userMessages: [],
    };
  },
  actions: {
    increment({ state }, current) {
      state.cur = current;
    },
    update({ state }, searchword) {
      state.searchText = searchword;
    },
    updateChar({ state }, character) {
      state.orderChar = character;
    },
    updateClass({ state }, classification) {
      state.orderClass = classification;
    },
    updateStatus({ state }, status) {
      state.orderStatus = status;
    },
    updateType({ state }, type) {
      state.orderType = type;
    },
    updateSeason({ state }, season) {
      state.orderSeason = season;
    },
    // users
    checkStorage({ state }) {
      if (localStorage.users != null) {
        state.users = JSON.parse(localStorage.getItem("users"));
      }
      if (localStorage.currentUser != null) {
        state.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      }
      if (localStorage.messages != null) {
        state.messages = JSON.parse(localStorage.getItem("messages"));
      }
      if (localStorage.userMessages != null) {
        state.userMessages = JSON.parse(localStorage.getItem("userMessages"));
      }
    },
    addUser({ state, commit }, newUser) {
      state.users.push(newUser);
      commit("addToStorage");
    },
    setCurrentUser({ state, commit }, currentUser) {
      state.currentUser = currentUser;
      console.log(state.currentUser);
      commit("addCurrentUserToStorage");
    },
    // messages
    addNewMessage({ state, commit }, newMessage) {
      state.messages.push(newMessage);
      console.log(state.messages);
      commit("addMessagesToStorage");
    },
    setUserMessages({ state, commit }) {
      state.userMessages = state.messages.filter((message) => {
        return message.userId === state.currentUser.id;
      });
      commit("addUserMessagesToStorage");
      // console.log(state.userMessages);
    },
  },
  mutations: {
    addToStorage(state) {
      console.log(state.users);
      if (localStorage.users != null) {
        localStorage.users = JSON.stringify(state.users);
      } else {
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },
    addCurrentUserToStorage(state) {
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    addMessagesToStorage(state) {
      localStorage.setItem("messages", JSON.stringify(state.messages));
    },
    addUserMessagesToStorage(state) {
      localStorage.setItem("userMessages", JSON.stringify(state.userMessages));
    },
  },
});
export default store;
