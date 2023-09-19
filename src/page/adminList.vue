<template>
  <div id="app">
    <div v-for="(question, index) in questions" :key="index">
      <h2>{{ question.question }}</h2>
      <ul>
        <li v-for="(option, optionIndex) in question.options" :key="optionIndex">
          {{ option.text }}
          <ul v-if="option.subQuestions">
            <li v-for="(subQuestion, subQuestionIndex) in option.subQuestions" :key="subQuestionIndex">
              <h4>{{ subQuestion.question }}</h4>
              <ul>
                <li v-for="(subOption, subOptionIndex) in subQuestion.options" :key="subOptionIndex">
                  {{ subOption.text }}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "问题1", ///
          id:1001, // 
          parentId:0,
          options: [    ///
            {
              text: "选项1",
              id:1002,
              parentId:1001,
              subQuestions: [
                {
                  question: "子问题1",
                  id:1003,
                  parentId:1002,
                  options: [
                    { text: "子问题1选项1" },
                    { text: "子问题1选项2" },
                    // 更多子问题1的选项...
                  ]
                },
                {
                  question: "子问题2",
                  options: [
                    { text: "子问题2选项1" },
                    { text: "子问题2选项2" },
                    // 更多子问题2的选项...
                  ]
                },
                // 更多子问题...
              ]
            },
            {
              text: "选项2",
              subQuestions: [
                // 其他选项的子问题...
              ]
            },
            // 更多选项...
          ]
        },
        {
          question: "问题2",
          options: [
            // 其他问题的选项...
          ]
        },
        // 更多问题...
      ]
    };
  }
};
</script>
