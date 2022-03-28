const api_url = "domain.json";
let checky = document.querySelector(".home");

async function getApi() {
  const response = await fetch(api_url);
  let data = await response.json();

  let filtarr = data.dom;
  searchs(filtarr);
  document.querySelector(".inp input").addEventListener("input", function () {
    let vals = this.value;

    if (vals == "") {
      filtarr = data.dom;
    } else {
      filtarr = data.dom.filter((els) => {
        return els.domainName == vals;
      });
    }

    searchs(filtarr);

    //console.log(filtarr);
  });

  // catfilter

  let cats = document.querySelectorAll('.categories [type="checkbox"]');
  let catarr = [];
  let catdomain = [];
  cats.forEach((inp) => {
    inp.addEventListener("input", function () {
      let vals = this.value;

      let findif = catarr.findIndex((infs) => {
        return infs == vals;
      });

      if (findif == -1) {
        catarr.push(vals);
      } else {
        catarr.splice(findif, 1);
      }

      filtarr.forEach((element) => {
        element.categories.forEach((catid) => {
          catarr.forEach((ids) => {
            if (catid == ids) {
              catdomain.push(element);
            } else {
            }
          });
        });
      });

      console.log(catdomain);
    });
  });

  // end

  // first range filter >>>>>>>>>>>>>>>>>>>>
  document.querySelector(".first-range").addEventListener("input", function () {
    if (this.value > 299) {
      outputy.classList.add("hidden");
    } else {
      outputy.classList.remove("hidden");
    }
  });

  // second range filter >>>>>>>>>>>>>>>>>>>>>
  document
    .querySelector(".second-range")
    .addEventListener("input", function () {
      data.dom.forEach((el) => {
        if (el.domainName.length != secondRange.value) {
          outputy.classList.add("hidden");
        } else {
          outputy.classList.remove("hidden");
        }
      });
    });

  // categories filter >>>>>>>>>>>>>>>>>>

  let category = filtarr.forEach((el) => {
    el.categories.forEach((element) => {
      return element;
    });
  });

  checky.addEventListener("input", function () {
    let newFilter = data.dom.filter((els) => {
      return els.categories.includes(1);
    });
    console.log(newFilter);
  });
}

let outputy = document.querySelector(".bigger");
function searchs(domains) {
  outputy.innerHTML = "";
  for (const key in domains) {
    const domain = domains[key];
    let dom = `
        <div class="domains mb-4">
        <div class="starting">
          <div class="icy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          <span class="ms-4"> ${domain.domainName}</span>
        </div>
        <div class="ending">
          <div class="pawr me-3">
            <p><b>${domain.price} ₾ </b></p>
            <p class="smally">956 $</p>
          </div>
          <div class="shopy">
            <a class="wheel" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
        `;
    outputy.innerHTML += dom;
    let i = 1;
    let go = document.querySelector('.wheel');
    let bubl = document.querySelector('.bubble');
    go.addEventListener('click', function(e){
      e.preventDefault();
      bubl.style.display = "block"
      bubl.textContent = i++;
    })
  }
}

getApi();

let tasks = document.querySelector(".domains");
let output = document.querySelector(".vals");
let rangeSlider = document.querySelector(".first-range");
let secondOutput = document.querySelector(".new-vals");
let secondRange = document.querySelector(".second-range");

output.value = rangeSlider.value;

rangeSlider.oninput = function () {
  output.value = this.value;
};

secondOutput.value = secondRange.value;
secondRange.oninput = function () {
  secondOutput.value = this.value;
};
