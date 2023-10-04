[12장] 함수 - 9번 과제
======================
### callback 지옥이라는 말이 유명하다.

### 직접 지옥을 만들어보자.

### 그리고 callback 지옥이 왜 위험한지 서술하시오.

<br>

```JavaScript
function callbackHell() {
    setTimeout(function () {
        console.log("Level 1");
        setTimeout(function () {
          console.log("Level 2");
          setTimeout(function () {
            console.log("Level 3");
            setTimeout(function () {
              console.log("Level 4");
              setTimeout(function () {
                console.log("Level 5");
                setTimeout(function () {
                  console.log("Level 6");
                  setTimeout(function () {
                    console.log("Level 7");
                    setTimeout(function () {
                      console.log("Level 8");
                      setTimeout(function () {
                        console.log("Level 9");
                        setTimeout(function () {
                          console.log("Level 10");
                          setTimeout(function () {
                            console.log("Level 11");
                            setTimeout(function () {
                              console.log("Level 12");
                              setTimeout(function () {
                                console.log("Level 13");
                                setTimeout(function () {
                                  console.log("Level 14");
                                  setTimeout(function () {
                                    console.log("Level 15");
                                  }, 1000);
                                }, 2000);
                              }, 3000);
                            }, 4000);
                          }, 5000);
                        }, 6000);
                      }, 7000);
                    }, 8000);
                  }, 9000);
                }, 10000);
              }, 11000);
            }, 12000);
          }, 13000);
        }, 14000);
      }, 15000);
}
```

- 가독성이 매우 떨어지고 유지보수가 어려워서