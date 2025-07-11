WITH bronze AS (
SELECT DISTINCT l1.user_id as user1_id, l2.user_id as user2_id
FROM Listens l1
         JOIN Listens l2
              ON l1.song_id = l2.song_id
                  AND l1.day = l2.day
                  AND l1.user_id != l2.user_id
GROUP BY l1.user_id, l2.user_id, l1.day
HAVING COUNT(*) >= 3
),
silver AS (
SELECT user1_id, user2_id
FROM Friendship
UNION
SELECT user2_id, user1_id
FROM Friendship
)
SELECT bronze.user1_id as user_id, bronze.user2_id as recommended_id
FROM bronze
LEFT JOIN silver
    ON bronze.user1_id = silver.user1_id
    AND bronze.user2_id = silver.user2_id
WHERE silver.user1_id IS NULL;
