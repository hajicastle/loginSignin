import React from 'react';
import './start.css';

function Start() {
  return (
    <div class="start">
      <div class="text-container">
        <div class="text-item1">
          <h3>반가워요!</h3>
        </div>
        <div class="text-item2">
          <h3>
            새로운 프로젝트를
            <br />
            시작해 볼까요?
          </h3>
        </div>
      </div>
      <div class="button-container">
        <div class="button-item1">
          <h6>팀블을 사용하려면 본인인증이 필요해요</h6>
        </div>
        <div class="button-item2">
          <a href="./selfcheck">시작하기</a>
        </div>
      </div>
    </div>
  );
}

export default Start;
