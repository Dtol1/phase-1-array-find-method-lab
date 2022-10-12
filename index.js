// code your solution here
// function superbowlWin(record){
//     let findW = record.find(superbowlWin)
//     return record.result === "W" 
//   }
  
//   let findW = record.find(superbowlWin)

function superbowlWin(record){
    let findW = record.find(win => win.result ==="W")
    if (findW){
        return findW.year
    }
    return findW
}


