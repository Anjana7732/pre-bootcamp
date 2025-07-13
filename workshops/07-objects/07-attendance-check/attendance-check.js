let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
function attendanceCheck(day) {
    let arr=[]
    for (let i=0; i<classRoom.length; i++) {
        let gname = classRoom[i]
        
        let dat = gname[Object.keys(gname)[0]]
        for (let j=0; j<dat.length; j++) {
            if (day in dat[j]) {
                if (dat[j][day]=== true){
                    bo=Object.keys(gname)[0]
                    
                    arr.push(bo)
                }
            }
        }
    }
    return arr;
}
console.log(attendanceCheck('Wednesday'))