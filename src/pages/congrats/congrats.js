import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './congrats.css';

function Congrats() {
  return (
    <div class="congrats">
      <div class="text-container">
        <div class="text-item1">
          <h3>환영합니다!</h3>
        </div>
        <div class="text-item2">
          <h3>그럼, 시작해 볼까요?</h3>
        </div>
      </div>
      <div class="button-container">
        <div class="button-item2">
          <a href="./">팀블 시작하기</a>
        </div>
      </div>
    </div>
  );
}

export default Congrats;
