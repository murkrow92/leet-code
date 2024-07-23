class Solution {
    public List<String> generateParenthesis(int inputNumber) {
        List<String> result = new ArrayList<>();
        generate("", inputNumber, inputNumber, result);
        return result;
    }

    private void generate(String current, int open, int close, List<String> result) {
        if (open == 0 && close == 0) {
            result.add(current);
            return;
        }
        if (open > 0) {
            generate(current + "(", open - 1, close, result);
        }
        if (close > open) {
            generate(current + ")", open, close - 1, result);
        }
    }
}