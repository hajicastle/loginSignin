import React, { useState } from 'react';
import styles from './tag.module.css';

import back from '../image/left-arrow.png';

function Tag() {
  const [kw, setKw] = useState('');
  const [list, setList] = useState(['UX']);

  function TextContainer() {
    function Back() {
      return (
        <div className={styles.back}>
          <a href="./selfcheck">
            <img src={back} alt="돌아가기" />
          </a>
        </div>
      );
    }
    function Text1() {
      return (
        <div className={styles.text1}>
          <h5>자신을 표현하는 키워드를 입력해주세요</h5>
        </div>
      );
    }
    function Text2() {
      // function handleKw(event) {
      //   setKw(event.target.value);
      // }
      return (
        <div className={styles.text2}>
          <label for="tag">
            키워드
            <br />
          </label>
          <input
            autoFocus="autoFocus"
            onChange={(e) => setKw(e.target.value)}
            type="text"
            placeholder="키워드를 입력해주세요"
            value={kw}
            required
          />
        </div>
      );
    }
    function TagContainer() {
      function handleTag() {
        if (kw != '') {
          setList([...list, kw]);
          setKw('');
        } else {
          alert('태그 이름을 입력해주세요');
        }
      }
      return (
        <>
          <button onClick={handleTag} type="button" className={styles.add}>
            +
          </button>
          <div class={styles.tagContainer}>
            {list.map((tag) => (
              <div class={styles.tagItem}>{tag}</div>
            ))}
          </div>
        </>
      );
    }

    return (
      <div className={styles.textContainer}>
        <Back />
        <Text1 />
        <Text2 />
        <TagContainer />
      </div>
    );
  }

  return (
    <div class={styles.tag}>
      <TextContainer />
      <div className={styles.buttonContainer}>
        <div className={styles.button1}>
          <a href="./congrats">확인</a>
        </div>
      </div>
    </div>
  );
}

export default Tag;
