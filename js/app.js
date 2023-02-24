const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      mails: [],
    };
  },

  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((mail) => {
          this.mails.push(mail.data.response);
        });
    }
  },
});

app.mount("#app");
