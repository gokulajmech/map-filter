

const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];

  let gen= (value)=>value.gender === 'female';
  let fname = (value)=> value.name;
  console.log(students.filter(gen).map(fname));

  let aStartName=(std)=>std.name[0]==='A';
  let print_A_Name=(std)=>std.name;
  console.log(students.filter(aStartName).map(print_A_Name));

  let mgen=(value)=>value.gender==='male';
  let s=0,m=[];
let count=(value)=>s=s+1;
  m=students.filter(mgen).map(count);
  console.log(s);