// Your code here
function saturdayFun(activity=`roller-skate`) {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(job=`go to the office`) {
    return `This Monday, I will ${job}.`
};

function wrapAdjective(flair=`*`) {
   return  function(param1=`special`) {
        return `You are ${flair}${param1}${flair}!`
    }
};

const Calculator = {
    add : function(x, y) {
        return (x+y)
    },
    subtract : function(x, y) {
        return (x-y)
    },
    multiply : function(x,y) {
        return (x*y)
    },
    divide : function(x,y) {
        return (x/y)
    }
}

function actionApplyer(startingInteger, funcArray) {
    if (funcArray.length === 0) {
        return startingInteger
    }
    else {
       return (((startingInteger*2)+1000)%7)
    }
};