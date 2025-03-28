package com.example.demo.busan.model.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.busan.model.dto.Comment;

@Mapper
public interface CommentMapper {
	
	@Insert("INSERT INTO TB_COMMENTS(UC_SEQ, CONTENT) VALUES(#{seq}, #{content});")
	void saveComment(Comment comment);
	
	@Select("SELECT UC_SEQ seq, CONTENT, CREATE_DATE createDate FROM TB_COMMENTS WHERE UC_SEQ = #{seq} ORDER BY createDate DSC")
	Comment selectCommentList(Long seq);
}
