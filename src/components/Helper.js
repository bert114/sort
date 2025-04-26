function loading(load) {
  setTimeout(() => {
    load(false);
  }, 300);
}

function sortPopularity(arr, setLoading) {
  const result = [...arr].sort((a, b) => {
    return b.rating - a.rating;
  });

  loading(setLoading);
  return result;
}

function sortAscending(arr, setLoading) {
  const result = [...arr].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  loading(setLoading);
  return result;
}

function sortDescending(arr, setLoading) {
  const result = [...arr].sort((a, b) => {
    return b.title.localeCompare(a.title);
  });

  loading(setLoading);
  return result;
}

export { sortPopularity, sortAscending, sortDescending };
