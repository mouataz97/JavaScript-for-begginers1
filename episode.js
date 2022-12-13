import { episodes } from './database';

for (let i in episodes){
    episodes[i].hasBeenWatched = true;
}

export { episodes };