//Chord list
const chords = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim', 'Cmaj7', 'Dm7', 'Em7', 'Fmaj7', 'G7', 'Am7', 'Bm7b5'];
//Lyric list
const lyrics1 = ['As the sun sets over the mountains,', 'As the horses run through the fields,', 'As the waves crash on the beach,', 'As the eagle soars above the mountains,', 'As the rain falls on the roofs,',
'As the cats meow,', 'As the dogs bark,', 'As the farmers sow their seeds,'];
const lyrics2 = ['the night grows cold', 'the day goes on', 'the evening draws in', 'the morning breaks'];
const lyrics3 = ['and I miss you more and more.', 'and I wish you were here.', 'and I long to see you again.', 'and I pray for salvation.', 'and my heart breaks even more.'];

const bandName1 = ['East', 'West', 'Next', 'Left', 'Best', 'Give', 'Max'];
const bandName2 = ['to', 'of', 'the', 'for', 'don\'t', 'not'];
const bandName3 = ['Love', 'Bass', 'Beat', 'Dead', 'Life'];

const randomNumGen = () => {
    const c1 = Math.floor(Math.random() * chords.length);
    const c2 = Math.floor(Math.random() * chords.length);
    const c3 = Math.floor(Math.random() * chords.length);
    const c4 = Math.floor(Math.random() * chords.length);

    const l1 = Math.floor(Math.random()* lyrics1.length);
    const l2 = Math.floor(Math.random()* lyrics2.length);
    const l3 = Math.floor(Math.random()* lyrics3.length);

    const b1 = Math.floor(Math.random()* bandName1.length);
    const b2 = Math.floor(Math.random()* bandName2.length);
    const b3 = Math.floor(Math.random()* bandName3.length);

    console.log('Here are the chords to your song:- ' + chords[c1] + ' ' + chords[c2] + ' ' + chords[c3] + ' ' + chords[c4] + '. These are your amazing lyrics:- '+ lyrics1[l1] + ' ' + lyrics2[l2] + ' ' + lyrics3[l3] + ' Your band name is:- ' + bandName1[b1]+ ' ' + bandName2[b2] + ' ' + bandName3[b3]);
};

