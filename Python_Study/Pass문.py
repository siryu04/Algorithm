[pass 문]
출처 : https://docs.python.org/ko/3/tutorial/controlflow.html#pass-statements

pass 문은 아무것도 하지 않습니다. 문법적으로 문장이 필요하지만, 프로그램이 특별히 할 일이 없을 때 사용할 수 있습니다. 예를 들어:

>>>
>>> while True:
...     pass  # Busy-wait for keyboard interrupt (Ctrl+C)
...
최소한의 클래스를 만들 때 흔히 사용됩니다:

>>>
>>> class MyEmptyClass:
...     pass
...
pass가 사용될 수 있는 다른 장소는 새 코드를 작업할 때 함수나 조건부 바디의 자리를 채우는 것인데, 여러분이 더 추상적인 수준에서 생각할 수 있게 합니다. pass 는 조용히 무시됩니다:

>>>
>>> def initlog(*args):
...     pass   # Remember to implement this!
...