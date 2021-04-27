export function handleNumberChange(setValue) {
  return function changeHandler(e) {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      setValue(e.target.value);
    }
  };
}

export function handleChange(setValue) {
  return function changeHandler(e) {
    setValue(e.target.value);
  };
}

export function handleJsonChange(setValue) {
  return function changeHandler(e) {
    try {
      const newValue = JSON.parse(e.target.value);
      setValue(newValue);
    } catch (err) {
      console.error(err);
    }
  };
}

export function handleBoolean(toggleValue) {
  return function changeHandler() {
    toggleValue((prev) => !prev);
  };
}
