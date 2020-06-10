## xml validation 알고리즘

* 주어진 string이 xml tag 인지 판별하여 boolen 값을 return 한다.

```
// true case
<a />
<a></a>
<a>test</a>
<a><b></b></a>
<a></a><b></b>
```

```
// false case
<a>
<<a></a>
<a><b></a></b>
```

* 단, 아래와 같은 상황에서는 flase를 return 해야한다.
  
```
//똑같은 tag일 경우
<a><a></a></a>

//연속으로 같은 tag일 경우
<a></a><a></a>

//depth가 2일 경우
<a><b><c></c><b></a>
```
