---
title: 문제 해결
nextjs:
  metadata:
    title: 문제 해결
    description: Speedetail App 문제 해결
---

## 로그인할 수 없음 / 동기화가 작동하지 않음

### 최신 버전 사용하기

오래된 버전을 사용하면 네트워크 문제가 발생할 수 있습니다.
[여기](https://www.speedetail.com/download)에서 최신 버전을 다운로드할 수 있습니다.

### 컴퓨터 재시작

당연한 말처럼 들리겠지만, Speedetail App과 컴퓨터를 재시작하는 것이 항상 좋은 첫 단계입니다.
컴퓨터를 재시작하면 모든 종류의 시스템 상태와 캐시가 초기화되며, 다른 프로그램들도 재설정되고 파일 및 기타 리소스의 잠금이 해제됩니다.

### 방화벽 확인

기업 네트워크 내에 있는 경우, 요청이 차단될 수 있습니다.
네트워크 관리자에게 앱이 `*.speedetail.com`에 접근할 수 있도록 허용을 요청하세요.

### 처음부터 할일 & 일정 동기화

Speedetail App은 빠른 동기화를 위해 체크포인트를 저장합니다.
새로운 편집 내용은 동기화되지만 이전 내용이 누락된 경우, 체크포인트가 손상되었을 수 있습니다.
이 경우 메뉴 **도움말 → 처음부터 할일&일정 동기화**를 선택하여 동기화를 시도해보세요.
이렇게 하면 Speedetail이 변경 이력의 처음부터 데이터를 동기화하려 시도합니다.

## 앱이 실행되지 않음

### "이 Mac에서 지원되지 않는 응용 프로그램이므로 열 수 없습니다."

이 오류는 [Mac의 Apple 실리콘 전환](https://www.apple.com/newsroom/2020/06/apple-announces-mac-transition-to-apple-silicon/) 때문입니다.
Mac에서 앱이 실행되지 않는다면, Intel 기반 Mac에서 작동하지 않는 Apple 실리콘 버전의 앱을 다운로드했기 때문입니다.
또한 Apple 실리콘 기반 Mac(예: M1 MacBook Air)에서 Intel 버전의 앱을 다운로드한 경우, Rosetta 2라는 변환 기술로 인해 성능이 제한됩니다.
