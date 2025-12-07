// object in array
const person1 = {
  salary: 1235,
  ID: "A001",
  hobbies: "Play game",
  image:
    "https://i.pinimg.com/1200x/ba/c9/77/bac977b4b57d58e0334bb84c71a90c2c.jpg",
};
const person2 = {
  salary: 123456789,
  ID: "A002",
  hobbies: "Read Book",
  image:
    "https://i.pinimg.com/1200x/ba/c9/77/bac977b4b57d58e0334bb84c71a90c2c.jpg",
};

const person = [person1, person2];
console.log(person);

let card = person.map((data) => {
  return `
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

<div class="antialiased text-gray-900 ">
  <div class="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
    <div class="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 group overflow-hidden transition-transform duration-300 hover:translate-y-[-10px]">
      <div class="h-48 w-full overflow-hidden">
              <img class="h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end" src="https://i.pinimg.com/1200x/ba/c9/77/bac977b4b57d58e0334bb84c71a90c2c.jpg" alt="Home in Countryside" />
      </div>

      <div class="p-6 pb-4 group-hover:bg-gray-700 duration-[0.3s]">
       
      
       <div class="mt-1">
          <span class="text-2xl font-semibold">$${data.salary}</span>
          <span class="text-gray-600 text-sm">/ wk</span>
        </div>
        <h4 class="mt-1 font-semibold text-xl leading-tight truncate group-hover:text-teal-600 duration-[0.3s]">${data.hobbies}</h4>
        <p class="Card-info text-gray-500 mt-2 group-hover:text-white">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p> 
        
      
          <div class="mt-4 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <span class="sr-only">Daniela Metz</span>
                <img class="h-10 w-10 rounded-full" src="${data.image}" alt=""
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline hover:text-teal-600  duration-[0.3s]">Daniela Metz</a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500 group-hover:text-white duration-[0.3s] ">
                <time datetime="2020-02-12 ">Feb 12, 2020</time>
                <span aria-hidden="true">·</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
            <div class="mt-2 flex items-center justify-between">
          <span class="text-teal-600 font-semibold">
            <span class="flex gap-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
             </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
             </svg>
             
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
             </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
             </svg>
              </span>
              </span>
              <span class="ml-2 text-gray-600 text-sm">34 reviews</span>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
});
document.getElementById("display-card").innerHTML = card;
