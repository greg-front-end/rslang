/* eslint-disable no-underscore-dangle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAgregatedCard } from '../api/getAggregatedCard';
import { getCard } from '../api/getCard';
import { getEasyWords } from '../api/getEasyWords';
import { getHardWords } from '../api/getHardWords';
import { getNoEasyWords } from '../api/getNoEasyWords';
import { ICreateWordOptions, IWordOptional } from '../types/ICreateWordOptions';
import { IWordsItem } from '../types/IWordsItem';
import { LoadStatus } from '../types/LoadStatus';
import { CardDifChange, TextBookState } from '../types/TextBook';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';
import { setValueLocalStorage } from '../utils/setValueLocalStorage';

const initialState: TextBookState = {
  cards: [],
  hardWords: [],
  group: Number(getValueLocalStorage('group')) || 0,
  page: Number(getValueLocalStorage('page')) || 0,
  pageButtons: [0, 1, 2, 3, 4, 5, 6],
  increment: false,
  decrement: false,
  loadStatus: '',
  switchHardWords: JSON.parse(getValueLocalStorage('SwitchHardWords')!) || false,
  easyWordsCount: 0,
  noEasyWords: [],
};

const fillElement = (el: IWordsItem, diff: ICreateWordOptions) => {
  const word = el;
  if (Object.hasOwn(word, 'userWord')) {
    word.userWord.difficulty = diff.difficulty;
    word.userWord.optional = diff.optional;
  } else {
    word.userWord = {
      difficulty: diff.difficulty,
      optional: {
        right: 0,
        wrong: 0,
        rightInRow: 0,
      },
    };
  }
  return word;
};

const textBookSlice = createSlice({
  name: 'textBookS',
  initialState,
  reducers: {
    setCardsArray: (state, action) => {
      state.cards = action.payload;
    },
    filterCard: (state, action: PayloadAction<ICreateWordOptions>) => {
      const index = state.cards.findIndex((el) => el._id === action.payload.wordId);
      state.cards = state.cards
        .map((el, i) => (i === index ? fillElement(el, action.payload) : el));
    },

    deleteFromHardWords: (state, action: PayloadAction<string>) => {
      state.hardWords = state.hardWords.filter((el) => el._id !== action.payload);
    },

    setGroup: (state, action: PayloadAction<number>) => {
      state.group = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPageButtons: (state, action: PayloadAction<number[]>) => {
      state.pageButtons = action.payload;
    },
    setIncrement: (state, action: PayloadAction<boolean>) => {
      state.increment = action.payload;
    },
    setDecrement: (state, action: PayloadAction<boolean>) => {
      state.decrement = action.payload;
    },
    clearHardWords: (state) => {
      state.hardWords = [];
    },
    toggleHardWords(state, action) {
      setValueLocalStorage('SwitchHardWords', action.payload);
      state.switchHardWords = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state, action) => {
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(getCard.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.loadStatus = LoadStatus.fulfilled;
      })

      .addCase(getCard.rejected, (state, action) => {
        state.loadStatus = LoadStatus.rejected;
      })

      .addCase(getAgregatedCard.pending, (state, action) => {
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(getAgregatedCard.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.loadStatus = LoadStatus.fulfilled;
      })

      .addCase(getAgregatedCard.rejected, (state, action) => {
        state.loadStatus = LoadStatus.rejected;
      })

      .addCase(getHardWords.pending, (state, action) => {
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(getHardWords.fulfilled, (state, action) => {
        state.hardWords = action.payload;
        state.loadStatus = LoadStatus.fulfilled;
      })

      .addCase(getHardWords.rejected, (state, action) => {
        state.loadStatus = LoadStatus.rejected;
      })

      .addCase(getEasyWords.pending, (state, action) => {
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(getEasyWords.fulfilled, (state, action) => {
        state.loadStatus = LoadStatus.fulfilled;
        state.easyWordsCount = action.payload;
      })
      .addCase(getEasyWords.rejected, (state, action) => {
        state.loadStatus = LoadStatus.rejected;
      });

    builder
      .addCase(getNoEasyWords.pending, (state, action) => {
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(getNoEasyWords.fulfilled, (state, action) => {
        state.loadStatus = LoadStatus.fulfilled;
        state.noEasyWords = action.payload;
      })

      .addCase(getNoEasyWords.rejected, (state, action) => {
        state.loadStatus = LoadStatus.rejected;
      });
  },
});

export const {
  setGroup, setPage, setPageButtons, setIncrement, setDecrement,
  clearHardWords, toggleHardWords, filterCard, deleteFromHardWords, setCardsArray,
} = textBookSlice.actions;
export default textBookSlice.reducer;
