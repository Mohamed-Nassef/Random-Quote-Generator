var quotes = {
  auther: "",
  quote: "",
};
var quotsList = [];
quotes = {
  auther: "hello",
  quote: "hellppppppppppppp",
};

quotsList = [
  {
    auther: "Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  { auther: "Frank Zappa", quote: "“So many books, so little time.”" },
  {
    auther: "Marcus Tullius Cicero",
    quote: "“A room without books is like a body without a soul.”",
  },
  {
    auther: "Mae West",
    quote: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    auther: "Mahatma Gandhi",
    quote: "“Be the change that you wish to see in the world.”",
  },
  {
    auther: "Robert Frost",
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
  },
  {
    auther: "Mark Twain",
    quote: "“If you tell the truth, you don't have to remember anything.”",
  },
  {
    auther: "Elbert Hubbard",
    quote: "“A friend is someone who knows all about you and still loves you.”",
  },
  {
    auther: "Oscar Wilde",
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
  },
  {
    auther: "Oscar Wilde",
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
  },
  {
    auther: "Mahatma Gandhi",
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
  },
];
var cheak = 0;

function generateQuote() {
  var x = Math.floor(Math.random() * quotsList.length);

  if (x == cheak) {
    x = Math.floor(Math.random() * quotsList.length);
  }
  document.getElementById("quoteOutput").innerHTML = quotsList[x].quote;
  document.getElementById("authorOutput").innerHTML = quotsList[x].auther;
  cheak = x;
  console.log(x);
}
console.log(quotsList[1].auther);
console.log(quotsList[4].quote);
