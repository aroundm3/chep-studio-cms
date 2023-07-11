module.exports = () => {
  return {
    ckeditor: {
      enabled: true,
      config: {
        editor: {
          items: ["fontColor"],
          fontColor: {
            columns: 5,
            documentColors: 10,
          },
        },
      },
    },
  };
};
