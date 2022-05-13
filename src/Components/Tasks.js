import React from 'react'



let n = 6;
let star = '';
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);

let s = '';
n = 5;
for (i = 1; i <= 7; i++) {
  for (j = n; j > i; j--) {
    s += '*';
    console.log("ll",s);
  }
  if (i > 4) {
    for (j = n; j <= i; j++) {
      s += '*';
    }
  }
  s += '\n';
}
console.log('1', s, 'V');



  // Double Start Start

  // let DoubeleStar = '';

  // for (let i = 0; i < 3; i++) {
  //   for (let k = 0; k < 3 - i; k++) {
  //     // if (k === 0) {
  //       DoubeleStar +=" *";
  //     // }
  //     // for S
  //     // DoubeleStar += ' ';
  //   }

  //   // for Spaces
  //   DoubeleStar += '\nf2';
  // }

  // for (let i = 1; i <= n; i++) {
  //   for (let j = 0; j < i; j++) {
  //     DoubeleStar += '*';
  //   }
  //   DoubeleStar += '\n';
  // }
  // console.log(DoubeleStar);

  // End

  let num = 5;
  let string = '';
  // Upside pyramid
  // upside diamond
  for (let i = 1; i <= num; i++) {
    // printing spaces
    for (let j = num; j > i; j--) {
      string += ' ';
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        string += '*';
      } else {
        string += ' ';
      }
    }
    string += '\n';
  }
  // downside diamond
  for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      string += ' ';
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (n - i) * 2 - 1) {
        string += '*';
      } else {
        string += ' ';
      }
    }
    string += '\n';
  }
  console.log(string);

  // var str = '';
  // for (let i = n / 2; i < n; i += 2) {
  //   //  first spaces
  //   for (let j = 1; j < n - i; j += 2) {
  //     str += '     ';
  //   }
  //   //  first stars
  //   for (let j = 1; j < i + 1-1; j++) {
  //     str += ' *';
  //   }
  //   // second spaces
  //   for (let j = 1; j < n - i + 1; j++) {
  //     str += '  ' ;
  //   }
  //   // second stars
  //   for (let j = 1; j < i + 1-1; j++) {
  //     str += '* ';
  //   }
  //   str += ' \n ';
  // }
  // lower part
  // inverted pyramid
  // for (let i = n; i > 0; i--) {
  //   for (let j = 0; j < n - i; j++) {
  //     str += '  ';
  //   }
  //   for (let j = 1; j < i * 2-2; j++) {
  //     str += '* ';
  //   }
  //   str += '\n  ';
  // }
  // console.log(str);

  // // Heart
  //   var str1 = '';
  //   for (k = 0; k <= 5; k += 2) {
  //     for (l = 0; l <= k; l++) {
  //       if (k == 1) {
  //         console.log(str1);
  //       } else if (k <= 3 && l == 2) {
  //         console.log(k);
  //       } else if (k == 5 && l == 1) {
  //         console.log(str1, '7');
  //       } else if (k == 5 && l == 5) {
  //         console.log(str1, '11');

  //       } else {
  //         str1 += '*';
  //       }
  //     }
  //     str1 += '\n';
  //   }
  // //


const Tasks = () => {
  return (
 <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
          justifyContent: 'space-between',

          borderRadius: 20,
        }}>
        <Text
          style={{
            color: 'red',
            borderWidth: 0.2,
            borderRadius: 20,
            padding: 20,
            borderColor: 'red',
          }}>
          {string}
        </Text>
        <Text style={{color: 'green',  borderWidth:0.5, borderRadius:20,padding:20, borderColor:"blue"}}>{str}</Text>
      
        <Text
          style={{
            color: 'black',
            alignSelf: 'center',
            borderWidth: 0.8,
            borderRadius: 20,
            padding: 20,
            paddingBottom: 0,
          }}>
          {s}
        </Text>
     </View>
  )  
}

export default Tasks