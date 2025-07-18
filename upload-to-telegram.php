<?php
$bot_token = "7845298613:AAF9E4QRIhgm4kEusWk0xYHa054KUubJGkQ";
$chat_id = "@Sayem1414";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $file_path = $_FILES['file']['tmp_name'];
        $file_name = $_FILES['file']['name'];

        $caption = "New file from: " . htmlspecialchars($_POST['name']);

        $url = "https://api.telegram.org/bot{$bot_token}/sendDocument";

        $post_fields = array(
            'chat_id'   => $chat_id,
            'caption'   => $caption,
            'document'  => new CURLFile($file_path, mime_content_type($file_path), $file_name)
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Content-Type:multipart/form-data"
        ));
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
        $output = curl_exec($ch);
        curl_close($ch);

        echo "<h2>✅ File successfully sent to Telegram!</h2><a href='share.html'>Back</a>";
    } else {
        echo "<h2>❌ Upload error. Please try again.</h2><a href='share.html'>Back</a>";
    }
} else {
    echo "Invalid request.";
}
?>
