let populationDisplay = (pop) => {
    if (pop) { 
      let populationStr = pop.toString();
      let formattedPopulation = populationStr.split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1 ').split('').reverse().join('');
      return formattedPopulation;
    } else {
      return <span>Chargement de la population...</span>;
    }
  };

  export default populationDisplay