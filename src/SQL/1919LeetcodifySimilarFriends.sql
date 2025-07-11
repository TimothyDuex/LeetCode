SELECT DISTINCT l1.user_id as user1_id, l2.user_id as user2_id
FROM Listens l1
    JOIN Listens l2
        ON l1.song_id = l2.song_id
        AND l1.day = l2.day
        AND (l1.user_id, l2.user_id) IN (SELECT * FROM Friendship)
GROUP BY l1.user_id, l2.user_id, l1.day
HAVING COUNT(*) >= 3;
