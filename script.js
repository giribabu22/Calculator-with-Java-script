var opeArr = ['+','/','*','-','<=','.','AC','**','%']
    let arr =[]
    let mathNums = []
    function mathOfthecal(ele,i){
      if (ele == '+'){
        return mathNums[i]+mathNums[i+2]
      }
      else if (ele == '-'){
        return mathNums[i]-mathNums[i+2]
      }
      else if (ele == '*'){
        return mathNums[i]*mathNums[i+2]
      }
      else if (ele == '/'){
        return mathNums[i] / mathNums[i+2]
      }
      else if (ele == '**'){
        return mathNums[i] ** mathNums[i+2]
      }
      else if (ele == '%'){
        return mathNums[i] % mathNums[i+2]
      }else{
        return 0
      }
    }

    function submetData(){
      let num =''
        arr.push('.')
        for (let ele of arr){
          if (opeArr.includes(ele)){
            console.log(num,num.length);
            if (num.length<12){
              mathNums.push(parseInt(num),ele)
              num = ''
            }else{
              window.alert('you enter the length 12')
              document.getElementById('placeofData').innerText= 0
              break
            }
          }else{
            num = num.concat(ele)
          }
        }
            let r = 0
            mathNums.pop()
            if (mathNums.length > 3 && mathNums.length%2!=0){
              mathNums.pop()
              mathNums.pop()
            }
            while (true){
              let sum = mathOfthecal(mathNums[1],r)
              mathNums.splice(0,3)
              mathNums.unshift(sum)
              if (mathNums.length <= 1){
                document.getElementById('placeofData').innerText= sum
                break
              }
        }
        mathNums = []
        arr = []
      }

      
    function display_car(bTn){
      if (bTn === 'AC' || bTn[0] === 'o' && arr.length === 0){
        arr=[]
        document.getElementById('placeofData').innerText= 0

      }else if ((bTn === 'del')){
        if (arr.length>0){
          arr.pop()
          var data = document.getElementById(bTn).value;
          if (arr.length != 0 && bTn[0] === 'o'){
          arr.push(data)
          }
          let s = ''
          for (let ele of arr){
            s = s.concat(ele);
          }
          document.getElementById('placeofData').innerText=s
        }else{document.getElementById('placeofData').innerText=0}
      }
      else if (bTn === 'sub'){
        submetData()
      }
      else{
        var data = document.getElementById(bTn).value;
          if (arr.length > 0){
            if (!opeArr.includes(arr[arr.length-1]) || bTn[0] !== 'o'){
              arr.push(data)
            }else{
              arr.pop()
              arr.push(data)
            }
          }else{
            if (opeArr.includes(data)|| data[0] === '0'){
            }else{
              arr.push(data)
            }
          }
          let s = ''
          for (let ele of arr){
              s = s.concat(ele);
          }
          document.getElementById('placeofData').innerText=s
      }
    }