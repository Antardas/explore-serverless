const result = document.querySelector(".result");

const fetchData = async () => {
  console.log("Fetch Data all");
  try {
    const { data } = await axios.get("/api/1-hello");
    result.textContent = data.data;
    console.log(data.data)
  } catch (error) {
    console.log(error);
  }
};
fetchData();
