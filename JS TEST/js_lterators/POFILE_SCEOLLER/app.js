const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    name: "siam sheikh",
    age: 22,
    gender: "male",
    lookingfor: "female",
    location: "chorpara",
    Image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Ripon",
    age: 22,
    gender: "male",
    lookingfor: "female",
    location: "Same you",
    Image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];

const Profiles = ProfileIterator(data);

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = Profiles.next().value;

  document.getElementById("profileDisplay").innerHTML = `<ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.preference}</li>
      <li class="list-group-item">Lookingfor: ${currentProfile.lookingfor}</li>
    </ul>
    `;

  document.getElementById(
    "imageDisplay"
  ).innerHTML = `<img src="${currentProfile.image}"`;
}

// Profile Iterator
function ProfileIterator(Profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < Profiles.length
        ? { value: Profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
