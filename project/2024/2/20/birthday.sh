#!/bin/bash

# ターミナルのサイズを取得
rows=$(tput lines)
cols=$(tput cols)

# ランダムな文字を表示する関数
function print_random_char() {
    chars=({a..z} {A..Z} {0..9})
    echo -n "${chars[$RANDOM % ${#chars[@]}]}"
}

# 三角形の高さ（行数の半分を使用）
height=$((rows / 2))

# スクリーンをランダムな文字で埋めつつ、上向きの三角形の形を作る
for ((i=1; i<=height; i++)); do
    # 三角形の中心座標を計算
    center_col=$((cols / 2))
    for ((j=1; j<=cols; j++)); do
        # 三角形の各行における開始と終了の列を計算
        start_col=$((center_col - i + 1))
        end_col=$((center_col + i - 1))

        # 点が三角形の内部または境界上にあるか判定
        if [ $j -ge $start_col ] && [ $j -le $end_col ]; then
            echo -n " "
        else
            # 三角形の外部の場合はランダムな文字を出力
            print_random_char
        fi
    done
    echo
done

# 逆三角形の追加で正三角形を作る
for ((i=height; i>=1; i--)); do
    # 三角形の中心座標を計算
    center_col=$((cols / 2))
    for ((j=1; j<=cols; j++)); do
        # 逆三角形の各行における開始と終了の列を計算
        start_col=$((center_col - i + 1))
        end_col=$((center_col + i - 1))

        # 点が逆三角形の内部または境界上にあるか判定
        if [ $j -ge $start_col ] && [ $j -le $end_col ]; then
            echo -n " "
        else
            # 逆三角形の外部の場合はランダムな文字を出力
            print_random_char
        fi
    done
    echo
done
