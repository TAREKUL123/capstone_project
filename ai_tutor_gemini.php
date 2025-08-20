<?php
header('Content-Type: application/json');

// === 1) API Key বসাও ===
// Google AI Studio থেকে কপি করো (https://aistudio.google.com/app/apikey)
$apiKey = "AIzaSyAw60Gld6EhU5uzrYXFN6hCMR0QX8r2BPk";

// === 2) সেরা মডেল (ফাস্ট এবং ফ্রি) ===
$model = "gemini-1.5-flash-latest";

// === 3) ইউজারের প্রশ্ন নেওয়া ===
$question = $_POST['question'] ?? "";

// === 4) Request payload তৈরি ===
$payload = [
    "contents" => [[
        "role"  => "user",
        "parts" => [["text" => $question]]
    ]]
];

// === 5) API URL ===
$url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$apiKey}";

// === 6) CURL Request ===
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

$response = curl_exec($ch);

// === 7) CURL Error Handling ===
if (curl_errno($ch)) {
    echo json_encode(["answer" => "CURL ERROR: " . curl_error($ch)]);
    curl_close($ch);
    exit;
}
curl_close($ch);

// === 8) Response Decode ===
$data = json_decode($response, true);

// === 9) API Error Handling ===
if (isset($data['error'])) {
    echo json_encode(["answer" => "API ERROR: " . ($data['error']['message'] ?? 'Unknown error')]);
    exit;
}

// === 10) AI উত্তর বের করা ===
$answer = $data['candidates'][0]['content']['parts'][0]['text'] ?? "No response from AI.";

// === 11) JSON রিটার্ন ===
echo json_encode(["answer" => $answer]);
