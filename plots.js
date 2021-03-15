var trace1={
  x: ["Soy sauce",	"Rice",	"Green onions",	"Ginger",	"Sesame oil",	"Broccoli",	"Carrot",	"Beef",	"Pasta",	"Pork",	"Corn starch",	"Shrimp",	"Peas",	"Cabbage",	"Mushrooms",	"Hot sauce",	"Cilantro",	"Rice vinegar",	"Chili pepper",	"Pineapple",	"Cauliflower",	"Hoisin sauce",	"Lime",	"Sesame seeds",	"Wonton wrappers",	"Zucchini",	"Peanuts",	"Bell pepper",	"Spinach",	"Vinegar",	"Honey",	"Orange",	"Peppers",	"Quinoa",	"Red pepper",	"Red pepper flakes",	"Tofu",	"Lettuce",	"Oyster sauce",	"Spring onions",	"Steak",	"Almonds",	"Brown sugar",	"Cashews",	"Corn",	"Tomato",	"Water chestnuts",	"Bamboo shoots",	"Bok choy",	"Curry powder",	"Edamame",	"Fish sauce",	"Green beans",	"Ketchup",	"Salmon",	"Tamari"],
  y: [ 71,	66,	64,	57,	50,	38,	33,	31,	27,	26,	23,	23,	21,	20,	19,	17,	15,	15,	14,	14,	13,	13,	13,	13,	13,	12,	11,	9,	9,	9,	8,	8,	8,	8,	8,	8,	8,	7,	7,	7,	7,	6,	6,	6,	6,	6,	6,	5,	5,	5,	5,	5,	5,	5,	5,	5  ],
  marker: {
    color: 'rgb(235, 158, 52)',
    line: {
      color: 'rgb(54,31,24)',
      width: 1.5
    }
  },
  type: 'bar'
};

var data = [trace1];

var layout = {
  title: "Popular Chinese Recipe Ingredients",
  font: {
    family: "'Lora', sans-serif",
    color: 'black',
  },
  xaxis: {
    showticklabels: true,
    tickangle: 45,
    tickfont: {
      size: 12,
      color: 'black'
    },
  },
yaxis: {
  title: '% Occurance Within Recipes',
  range: [0, 80],
  titlefont: {
    size: 16,
    color: 'black'
   },
  }, 
};

Plotly.newPlot("bar-plot1", data, layout);



var trace2={
  x: ["Rice",	"Tomato",	"Ginger",	"Peanut butter",	"Sweet potato",	"Cilantro",	"Cayenne pepper",	"Lemon",	"Peanuts",	"Beef",	"Tomato paste",	"Lamb",	"Curry powder",	"Bay leaves",	"Bread",	"Cumin",	"Potato",	"Chili pepper",	"Cinnamon",	"Coriander",	"Thyme",	"Carrot",	"Couscous",	"Parsley",	"Chutney",	"Raisins",	"Red pepper flakes",	"Vinegar",	"Apricot",	"Turmeric",	"Coconut milk",	"Dry seasoning rub",	"Meatballs",	"Yogurt",	"Almonds",	"Chickpeas",	"Custard",	"Lime",	"Paprika",	"Squash",	"Wine",	"Berbere",	"Cardamom",	"Collard greens",	"Cucumber",	"Nutmeg",	"Shrimp",	"Spinach",	"Worcestershire sauce"],
  y: [63,	49,	46,	39,	39,	34,	28,	27,	27,	25,	25,	24,	23,	20,	20,	20,	20,	16,	16,	16,	14,	13,	13,	13,	11,	11,	11,	11,	10,	10,	8,	8,	8,	8,	7,	7,	7,	7,	7,	7,	7,	6,	6,	6,	6,	6,	6,	6,	6  ],
  marker: {
    color: 'rgb(229,166,86)',
    line: {
      color: 'rgb(189, 77, 8)',
      width: 1.5
    }
  },
  type: 'bar'
};

var data2 = [trace2];

var layout2 = {
    title: "Popular African Recipe Ingredients",
    font: {
      family: "'Lora', sans-serif",
      color: 'black',
    },
    xaxis: {
      showticklabels: true,
      tickangle: 45,
      tickfont: {
        size: 12,
        color: 'black'
      },
    },
  yaxis: {
    title: '% Occurance Within Recipes',
    range: [0, 70],
    titlefont: {
      size: 16,
      color: 'black'
     },
    }, 
  };

Plotly.newPlot("bar-plot2", data2, layout2);


var trace3={
  x: ["Tomato sauce",	"Pasta",	"Tomato",	"Parmesan",	"Cheese",	"Basil",	"Mozzarella",	"Mushrooms",	"Spinach",	"Parsley",	"Beef",	"Eggplant",	"Zucchini",	"Cauliflower",	"Oregano",	"Sausage",	"Rice",	"Ricotta cheese",	"Squash",	"Thyme",	"Lasagne noodles",	"Red pepper flakes",	"Gnocchi",	"Tomato paste",	"Carrot",	"Potato",	"Wine",	"Bay leaves",	"Celery",	"Lemon",	"Pizza dough",	"Asparagus",	"Peas",	"Peppers",	"Beans",	"Breadcrumbs",	"Italian seasoning",	"Kale",	"Quinoa",	"Red pepper",	"Cream",	"Vinegar",	"Yeast",	"Balsamic vinegar",	"Clove",	"Cottage cheese",	"Gravy",	"Nutmeg",	"Ravioli"],
  y: [88,	81,	60,	59,	54,	47,	43,	32,	29,	27,	23,	23,	21,	18,	18,	18,	17,	16,	16,	16,	15,	15,	13,	13,	12,	12,	11,	10,	10,	10,	9,	8,	8,	8,	7,	7,	7,	7,	7,	7,	6,	6,	6,	5,	5,	5,	5,	5,	5  ],
  marker: {
    color: 'rgb(120, 105, 99)',
    line: {
      color: 'rgb(189, 77, 8)',
      width: 1.5
    }
  },
  type: 'bar'
};

var data3 = [trace3];

var layout3 = {
    title: "Popular Italian Recipe Ingredients",
    font: {
      family: "'Lora', sans-serif",
      color: 'black',
    },
    xaxis: {
      showticklabels: true,
      tickangle: 45,
      tickfont: {
        size: 12,
        color: 'black'
      },
    },
  yaxis: {
    title: '% Occurance Within Recipes',
    range: [0, 90],
    titlefont: {
      size: 16,
      color: 'black'
     },
    }, 
  };

Plotly.newPlot("bar-plot3", data3, layout3);



var trace4={
  x: ["Cilantro",	"Peanuts",	"Green onions",	"Lime",	"Carrot",	"Pasta",	"Ginger",	"Quinoa",	"Cabbage",	"Soy sauce",	"Fish sauce",	"Sesame oil",	"Peanut butter",	"Rice",	"Basil",	"Bell pepper",	"Honey",	"Red pepper",	"Coconut milk",	"Peanut sauce",	"Salmon",	"Sesame seeds",	"Sugar",	"Tofu",	"Cashews",	"Steak",	"Chili pepper",	"Edamame",	"Vinegar",	"Zucchini",	"Coconut oil",	"Cucumber",	"Peppers",	"Broccoli",	"Curry paste",	"Lettuce",	"Sriracha",	"Sweet potato",	"Bean sprouts",	"Beef",	"Mint",	"Shrimp",	"Tamari",	"Lemon grass",	"Potato",	"Chili sauce",	"Fish",	"Kale",	"Squash",	"Tomato",	"Cauliflower",	"Coriander",	"Duck",	"Mushrooms",	"Red pepper flakes",	"Almond butter",	"Almonds",	"Mango",	"Arbol chile",	"Brown sugar",	"Chili powder",	"Coconut",	"Hot sauce",	"Orange",	"Peas",	"Rice noodles"],
  y: [81,	61,	58,	58,	57,	45,	40,	36,	31,	31,	25,	25,	24,	24,	21,	20,	20,	20,	19,	17,	17,	17,	17,	17,	15,	15,	14,	14,	14,	14,	13,	13,	13,	12,	12,	12,	12,	12,	11,	11,	11,	11,	11,	10,	8,	8,	8,	8,	8,	8,	7,	7,	7,	7,	7,	6,	6,	6,	5,	5,	5,	5,	5,	5,	5,	5  ],
  marker: {
    color: 'rgb(235, 158, 52)',
    line: {
      color: 'rgb(189, 77, 8)',
      width: 1.5
    }
  },
  type: 'bar'
};

var data4 = [trace4];

var layout4 = {
    title: "Popular Thai Recipe Ingredients",
    font: {
      family: "'Lora', sans-serif",
      color: 'black',
    },
    xaxis: {
      showticklabels: true,
      tickangle: 45,
      tickfont: {
        size: 12,
        color: 'black'
      },
    },
  yaxis: {
    title: '% Occurance Within Recipes',
    range: [0, 80],
    titlefont: {
      size: 16,
      color: 'black'
     },
    }, 
  };

Plotly.newPlot("bar-plot4", data4, layout4);




var trace5={
  x: ["Pasta",	"Cheese",	"Lemon",	"Tomato",	"Potato",	"Basil",	"Fish",	"Salmon",	"Avocado",	"Carrot",	"Eggplant",	"Spinach",	"Squash",	"Vinegar",	"Bacon",	"Kale",	"Parmesan",	"Sweet potato",	"Beans",	"Mozzarella",	"Pork",	"Rice",	"Lime",	"Shrimp",	"Beef",	"Chili powder",	"Paprika",	"Red pepper flakes",	"Tomato sauce",	"Cilantro",	"Honey",	"Mushrooms",	"Salsa",	"Walnuts",	"Zucchini",	"Broth",	"Celery",	"Chickpeas",	"Chili pepper",	"Cucumber",	"Cumin",	"Ginger",	"Green onions",	"Parsley",	"Peppers",	"Yogurt",	"Breadcrumbs",	"Cayenne pepper",	"Duck",	"Maple syrup",	"Mustard",	"Raspberries",	"Ribs",	"Shallot",	"Spaghetti squash",	"Thyme",	"Tortilla"],
  y: [38,	27,	27,	27,	24,	23,	15,	15,	13,	13,	13,	13,	12,	12,	11,	11,	11,	11,	10,	10,	10,	10,	9,	9,	8,	8,	8,	8,	8,	7,	7,	7,	7,	7,	7,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	5,	5,	5,	5,	5,	5,	5,	5,	5,	5,	5  ],
  marker: {
    color: 'rgb(235, 158, 52)',
    line: {
      color: 'rgb(189, 77, 8)',
      width: 1.5
    }
  },
  type: 'bar'
};

var data5 = [trace5];

var layout5 = {
    title: "Popular Latin American Recipe Ingredients",
    font: {
      family: "'Lora', sans-serif",
      color: 'black',
    },
    xaxis: {
      showticklabels: true,
      tickangle: 45,
      tickfont: {
        size: 12,
        color: 'black'
      },
    },
  yaxis: {
    title: '% Occurance Within Recipes',
    range: [0, 40],
    titlefont: {
      size: 16,
      color: 'black'
     },
    }, 
  };

Plotly.newPlot("bar-plot5", data5, layout5);


var trace6={
  x: ["Tomato",	"Corn",	"Cornbread",	"Bacon",	"Collard greens",	"Sausage",	"Grits",	"Greens",	"Cheese",	"Vinegar",	"Cornmeal",	"Buttermilk",	"Beans",	"Turkey",	"Pork",	"Hot sauce",	"Baking powder",	"Parsley",	"Ribs",	"Lemon",	"Apple",	"Shrimp",	"Celery",	"Bell pepper",	"Red pepper",	"Jalapeno pepper",	"Catfish",	"Carrot",	"Bread",	"Stuffing",	"Paprika",	"Nuts",	"Cinnamon",	"Cilantro",	"Cayenne pepper",	"Thyme",	"Mushrooms",	"Lima beans",	"Honey",	"Wine",	"Sage",	"Potato",	"Pecans",	"Mustard",	"Mayonnaise",	"Maple syrup",	"Ham",	"Green pepper",	"Chili powder",	"Breadcrumbs",	"Yogurt",	"Worcestershire sauce",	"Tomato paste",	"Steak",	"Sour cream",	"Shallot",	"Red onion",	"Peas",	"Oats",	"Cream",	"Cocoa powder",	"Chili pepper",	"Baking soda"],
  y: [35,	27,	24,	23,	20,	18,	18,	17,	17,	15,	15,	15,	15,	14,	14,	14,	14,	13,	12,	12,	12,	11,	11,	11,	10,	10,	10,	10,	10,	8,	8,	8,	8,	8,	8,	7,	7,	7,	7,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	5,	5,	5,	5,	5,	5,	5,	5,	5,	5,	5,	5,	5  ],
  marker: {
    color: 'rgb(235, 158, 52)',
    line: {
      color: 'rgb(189, 77, 8)',
      width: 1.5
    }
  },
  type: 'bar'
};

var data6 = [trace6];

var layout6 = {
    title: "Popular American Southern Recipe Ingredients",
    font: {
      family: "'Lora', sans-serif",
      color: 'black',
    },
    xaxis: {
      showticklabels: true,
      tickangle: 45,
      tickfont: {
        size: 12,
        color: 'black'
      },
    },
  yaxis: {
    title: '% Occurance Within Recipes',
    range: [0, 40],
    titlefont: {
      size: 16,
      color: 'black'
     },
    }, 
  };

Plotly.newPlot("bar-plot6", data6, layout6);