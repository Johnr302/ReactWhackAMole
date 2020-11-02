const hitMole = (event, hitPosition) => {
  let el = event.currentTarget.getAttribute("id");

  return hitPosition === Number(el);
};

export { hitMole };
