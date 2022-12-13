let artistProfile = {
    name: 'Tau Perkington',
    age: 27,
    available: true
};

let allProfiles = [artistProfile]; // new Array containing the above object

artistProfile.available = false; // changing the object

console.log(allProfiles) // will show { name: 'Tau Perkington', age: 27, available: false }


// ====================================


class Episode {
    constructor(title, duration, hasBeenWatched) {
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  let firstEpisode = new Episode('Dark Beginnings', 45, true);
  let secondEpisode = new Episode('The Mystery Continues', 45, false);
  let thirdEpisode = new Episode('An Unexpected Climax', 60, false);
  
  // Modify the array here
  // ====================================
  
  let episodes = [];
  episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);
  
  episodes.pop();
  
  let numberOfEpisodes = episodes.length;
  
  
