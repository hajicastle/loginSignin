import React from 'react';
import './selfcheck.css';
import back from '../image/left-arrow.png';

function Selfcheck() {
  return (
    <div class="selfcheck">
      <div class="text-container">
        <div class="back">
          <a href="./start">
            <img src={back} alt="돌아가기" />
          </a>
        </div>
        <div class="text-item1">
          <h3>본인이 맞나요?</h3>
        </div>
        <div class="text-item2">
          <label for="name">
            이름
            <br />
          </label>
          <input type="text" id="name" value="넙죽이" required />
        </div>
        <div class="text-item2">
          <label for="year">
            입학년도
            <br />
          </label>
          <input type="text" id="year" value="2024" required />
        </div>
        <div class="text-item2">
          <label for="department">
            학과
            <br />
          </label>
          <input type="text" id="department" value="산업디자인학과" required />
        </div>
        <div class="text-item2">
          <label for="email">
            이메일
            <br />
          </label>
          <input type="email" id="email" value="학교 이메일" required />
        </div>
      </div>
      <div class="button-container">
        <div class="button-item2">
          <a href="./tag">확인</a>
        </div>
      </div>
    </div>
  );
}

export default Selfcheck;
