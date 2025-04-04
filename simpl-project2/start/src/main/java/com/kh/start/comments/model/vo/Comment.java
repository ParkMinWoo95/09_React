package com.kh.start.comments.model.vo;

import java.sql.Date;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Comment {
	private Long commentNo;
	@NotBlank(message="댓글은 없을 수 없음")
	private String commentContent;
	private Long commentWriter;
	private Date createDate;
	private Long refBoardNo;
}
