const styling = () => {
  let content = `body, html {
  background-color: rgb(51, 51, 51);
  color: rgb(243, 243, 243);
}

a {
  color: rgb(16, 201, 139);
}

a:hover {
  color: rgb(21, 168, 119);;
}

th, td {
  color: rgb(243, 243, 243);
}

footer {
  margin-bottom: 0 !important;
}

.card {
  background-color: rgb(87, 87, 87);
}

.main-wrapper{
  margin-bottom: 5rem!important;
  margin-top: 3rem!important;
}`;
  return content;
};

exports.styling = styling;